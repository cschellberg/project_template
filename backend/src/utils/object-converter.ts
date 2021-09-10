

export const convertArray = <T>(arr:[]):T[]=>{
  const retArray:T[]=[];
  if ( arr){
      for ( const obj of arr){
          retArray.push(obj as T)
      }
  }
  return retArray;
}

