export default function getIdFromURL() {
    return window.location.href.split("/").pop()?.toString();
}
