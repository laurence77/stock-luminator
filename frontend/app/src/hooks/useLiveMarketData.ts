import { useState, useEffect, useRef, useCallback } from 'react';

export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: string;
}

interface PriceState {
  [ticker: string]: MarketData;
}

/**
 * Custom hook to manage live market data stream via WebSocket.
 * Features automated reconnection with exponential backoff and institutional error handling.
 */
export function useLiveMarketData(tickers: string[]) {
  const [data, setData] = useState<PriceState>({});
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const socketRef = useRef<WebSocket | null>(null);
  const reconnectAttemptRef = useRef(0);
  const connectRef = useRef<() => void>(() => {});
  const maxReconnectDelay = 10000;
  const baseReconnectDelay = 200;

  const handleReconnect = useCallback(() => {
    const delay = Math.min(
      baseReconnectDelay * Math.pow(2, reconnectAttemptRef.current),
      maxReconnectDelay
    );
    
    console.warn(`[MarketData] Reconnecting in ${delay}ms...`);
    
    setTimeout(() => {
      reconnectAttemptRef.current += 1;
      connectRef.current();
    }, delay);
  }, []);

  const connect = useCallback(() => {
    const WS_URL = 'wss://mock-data-feed.local'; 

    try {
      const isDev = import.meta.env.DEV;
      
      if (isDev) {
         console.warn(`[MarketData] Establishing connection to ${WS_URL}...`);
         setTimeout(() => {
           setIsConnected(true);
           setError(null);
           reconnectAttemptRef.current = 0;
           console.log('[MarketData] Institutional feed synchronized.');
         }, 1000);
         return;
      }

      const socket = new WebSocket(WS_URL);
      socketRef.current = socket;

      socket.onopen = () => {
        setIsConnected(true);
        setError(null);
        reconnectAttemptRef.current = 0;
        console.log('[MarketData] Real-time bridge active.');
        
        socket.send(JSON.stringify({
          action: 'subscribe',
          params: tickers.join(',')
        }));
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.ev === 'AM' || message.type === 'trade') {
           setData(prev => ({
             ...prev,
             [message.sym]: {
                symbol: message.sym,
                price: message.p || message.price,
                change: message.c || 0,
                changePercent: message.cp || 0,
                timestamp: new Date().toISOString()
             }
           }));
        }
      };

      socket.onerror = (err) => {
        setError('Synchronicity failure. Attempting bridge re-initialization.');
        console.error('[MarketData] Error:', err);
      };

      socket.onclose = () => {
        setIsConnected(false);
        handleReconnect();
      };

    } catch {
      setError('Connection refused. Verify network perimeter.');
      handleReconnect();
    }
  }, [tickers, handleReconnect]);

  // Keep the ref in sync with the latest connect function
  useEffect(() => {
    connectRef.current = connect;
  }, [connect]);

  useEffect(() => {
    connect();

    // Mock internal data generator to simulate the WS stream for visual demonstrations
    const mockInterval = setInterval(() => {
      if (isConnected) {
        setData(prev => {
          const newState = { ...prev };
          tickers.forEach(symbol => {
            const currentPrice = prev[symbol]?.price || (symbol === 'TSLA' ? 240 : symbol === 'BTC' ? 64000 : 800);
            const fluctuation = (Math.random() - 0.5) * (currentPrice * 0.001);
            const newPrice = currentPrice + fluctuation;
            
            newState[symbol] = {
              symbol,
              price: Number(newPrice.toFixed(2)),
              change: fluctuation,
              changePercent: (fluctuation / currentPrice) * 100,
              timestamp: new Date().toISOString()
            };
          });
          return newState;
        });
      }
    }, 1500);

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
      clearInterval(mockInterval);
    };
  }, [connect, tickers, isConnected]);

  return { data, isConnected, error };
}
