/**
 * Safari Tab Accessibility Fix
 *
 * Safari has unique keyboard navigation requirements:
 * 1. Tab navigation is disabled by default in Safari
 * 2. Links and buttons need explicit tabindex or special handling
 * 3. Focus management needs to be more explicit
 */

(function () {
  "use strict";

  // Check if we're in Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Fix Safari's tabbing issues
  if (isSafari) {
    console.log("Safari detected - applying accessibility fixes");

    // Enable tabbing for all interactive elements in Safari
    document.addEventListener("DOMContentLoaded", function () {
      enableSafariTabbing();
      fixSafariNavigation();
    });
  }

  // Fix Chrome first nav item issue
  document.addEventListener("DOMContentLoaded", function () {
    fixFirstNavItemFocus();
    improveTabOrder();
  });

  /**
   * Enable Safari tabbing by adding explicit tabindex to interactive elements
   */
  function enableSafariTabbing() {
    // Get all interactive elements that should be tabbable
    const interactiveElements = document.querySelectorAll(`
            a[href]:not([tabindex="-1"]),
            button:not([disabled]):not([tabindex="-1"]),
            input:not([disabled]):not([type="hidden"]):not([tabindex="-1"]),
            textarea:not([disabled]):not([tabindex="-1"]),
            select:not([disabled]):not([tabindex="-1"]),
            [role="button"]:not([tabindex="-1"]),
            [role="link"]:not([tabindex="-1"])
        `);

    interactiveElements.forEach(function (element, index) {
      // Only add tabindex if element doesn't already have one
      if (!element.hasAttribute("tabindex")) {
        element.setAttribute("tabindex", "0");
      }

      // Ensure Safari shows focus
      element.addEventListener("focus", function (e) {
        e.target.style.outline = "2px solid #3e59e1";
        e.target.style.outlineOffset = "2px";
      });

      element.addEventListener("blur", function (e) {
        // Remove inline focus styles when focus is lost
        e.target.style.outline = "";
        e.target.style.outlineOffset = "";
      });
    });
  }

  /**
   * Fix Safari navigation specifically
   */
  function fixSafariNavigation() {
    const navLinks = document.querySelectorAll(".primary-nav a, header nav a");

    navLinks.forEach(function (link, index) {
      // Ensure navigation links are tabbable in Safari
      if (!link.hasAttribute("tabindex")) {
        link.setAttribute("tabindex", "0");
      }

      // Add explicit keyboard handling for Safari
      link.addEventListener("keydown", function (e) {
        // Handle Enter key
        if (e.key === "Enter" || e.keyCode === 13) {
          e.preventDefault();
          link.click();
        }

        // Handle Arrow keys for navigation
        if (e.key === "ArrowRight" || e.keyCode === 39) {
          e.preventDefault();
          focusNextNavItem(link);
        } else if (e.key === "ArrowLeft" || e.keyCode === 37) {
          e.preventDefault();
          focusPrevNavItem(link);
        }
      });
    });

    // Fix mobile menu button
    const mobileMenuButton = document.querySelector(".button-open-menu");
    if (mobileMenuButton && !mobileMenuButton.hasAttribute("tabindex")) {
      mobileMenuButton.setAttribute("tabindex", "0");
    }
  }

  /**
   * Fix Chrome first navigation item focus issue
   */
  function fixFirstNavItemFocus() {
    const firstNavItem = document.querySelector(
      ".primary-nav a:first-of-type, header nav a:first-of-type"
    );

    if (firstNavItem) {
      // Ensure the first nav item is focusable
      if (!firstNavItem.hasAttribute("tabindex")) {
        firstNavItem.setAttribute("tabindex", "0");
      }

      // Add visual focus indicator
      firstNavItem.addEventListener("focus", function () {
        console.log("First nav item focused");
      });
    }
  }

  /**
   * Improve overall tab order
   */
  function improveTabOrder() {
    // Ensure proper tab order sequence
    let tabIndex = 1;

    // 1. Skip link (already has proper tabindex)
    const skipLink = document.getElementById("skip-to-content");
    if (skipLink && !skipLink.hasAttribute("tabindex")) {
      skipLink.setAttribute("tabindex", "0");
    }

    // 2. Logo link
    const logoLink = document.querySelector(".logo a, #main-url");
    if (logoLink && !logoLink.hasAttribute("tabindex")) {
      logoLink.setAttribute("tabindex", "0");
    }

    // 3. Navigation items
    const navItems = document.querySelectorAll(".primary-nav a, header nav a");
    navItems.forEach(function (item) {
      if (!item.hasAttribute("tabindex")) {
        item.setAttribute("tabindex", "0");
      }
    });

    // 4. Header buttons
    const headerButtons = document.querySelectorAll(".header-buttons a");
    headerButtons.forEach(function (button) {
      if (!button.hasAttribute("tabindex")) {
        button.setAttribute("tabindex", "0");
      }
    });

    // 5. Mobile menu button
    const mobileMenuButton = document.querySelector(".button-open-menu");
    if (mobileMenuButton && !mobileMenuButton.hasAttribute("tabindex")) {
      mobileMenuButton.setAttribute("tabindex", "0");
    }
  }

  /**
   * Focus next navigation item
   */
  function focusNextNavItem(currentItem) {
    const navItems = Array.from(
      document.querySelectorAll(".primary-nav a, header nav a")
    );
    const currentIndex = navItems.indexOf(currentItem);

    if (currentIndex >= 0 && currentIndex < navItems.length - 1) {
      navItems[currentIndex + 1].focus();
    } else if (currentIndex === navItems.length - 1) {
      // Focus first header button or mobile menu button
      const nextFocusable = document.querySelector(
        ".header-buttons a, .button-open-menu"
      );
      if (nextFocusable) {
        nextFocusable.focus();
      }
    }
  }

  /**
   * Focus previous navigation item
   */
  function focusPrevNavItem(currentItem) {
    const navItems = Array.from(
      document.querySelectorAll(".primary-nav a, header nav a")
    );
    const currentIndex = navItems.indexOf(currentItem);

    if (currentIndex > 0) {
      navItems[currentIndex - 1].focus();
    } else if (currentIndex === 0) {
      // Focus logo or skip link
      const prevFocusable = document.querySelector(".logo a, #skip-to-content");
      if (prevFocusable) {
        prevFocusable.focus();
      }
    }
  }

  // Safari-specific alert to inform users about tab settings
  if (isSafari) {
    // Only show once per session
    if (!sessionStorage.getItem("safari-tab-info-shown")) {
      console.log(
        '🔍 Safari Tab Navigation: If tabbing doesn\'t work, enable "Press Tab to highlight each item on a webpage" in Safari > Settings > Advanced'
      );
      sessionStorage.setItem("safari-tab-info-shown", "true");
    }
  }
})();
