export const createResponse = (result: boolean): Response => {
    const response = Response();
    if(!result) {
        response.body = 'Error';
        response.statusCode = 500;
    }
    response.body = 'OK';
    response.statusCode = 200;
    return response;
}
