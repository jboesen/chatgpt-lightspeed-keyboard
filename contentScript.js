function clickButton() {
    const button = document.querySelector('button.rounded-full.border-2.border-gizmo-gray-950.p-1.dark\\:border-gray-200[aria-label="Stop generating"]');
    
    if (button) {
        button.click();
    }
}

clickButton();
