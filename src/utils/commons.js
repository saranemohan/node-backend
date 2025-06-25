
export const isGeneralException = (err) => {
    return err instanceof Error && err.constructor === Error;
}

