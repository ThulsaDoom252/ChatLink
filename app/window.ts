interface CustomWindow extends Window {
    s1: any;
}

declare global {
    const window: CustomWindow;
}

export {}; 