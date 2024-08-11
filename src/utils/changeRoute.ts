const basePath = 'http://localhost:5173'

const changeRoute = (event: any, targetPath: string) => {
    event.preventDefault();
    window.history.pushState({}, "", `${basePath}/${targetPath}`);
    window.location.reload();
}

export default changeRoute;
