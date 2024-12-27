declare module "*.mp3" {
    const value: string;
    export default value;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
