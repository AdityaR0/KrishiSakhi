import React, { useEffect } from "react";

const LanguageDropdown = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const googleSelect = document.querySelector(".goog-te-combo");
      const customSelect = document.getElementById("custom-language-dropdown");

      // When Google Translate loads
      if (googleSelect && customSelect && customSelect.options.length <= 1) {
        // Copy all options from Google's dropdown
        Array.from(googleSelect.options).forEach((option) => {
          if (option.value) {
            const newOption = document.createElement("option");
            newOption.value = option.value;
            newOption.textContent = option.textContent;
            customSelect.appendChild(newOption);
          }
        });

        // Sync selection
        customSelect.onchange = function () {
          googleSelect.value = this.value;
          googleSelect.dispatchEvent(new Event("change"));
        };

        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <select id="custom-language-dropdown" className="custom-language-dropdown">
      <option value="en">English</option>
    </select>
  );
};

export default LanguageDropdown;
