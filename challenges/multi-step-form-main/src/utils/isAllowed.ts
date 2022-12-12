interface isAllowedProps{
  query: string,
}

export const isAllowed = ({query} : isAllowedProps) => {

  if(!query) return {
    isError: true,
    id: null
  };

  const id = query.replace("?id=", "");

  if(id.length !== 1) return {
    isError: true,
    id: parseInt(id)
  };

  return {
    isError: false,
    id: parseInt(id)
  }
}