const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

export const styles = {
    container: {
        display: viewport.width > 900 ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-between",
        height: 120,
        width: "100%",
    },
    imagenes: {
        height: "100%",
    },
    categorias: {
        margin: 15,
        color: 'red',
    },
};