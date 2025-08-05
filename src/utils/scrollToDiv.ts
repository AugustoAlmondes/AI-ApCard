export default function scrollToDiv(divId: string): void {
    const element = document.getElementById(divId);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
}