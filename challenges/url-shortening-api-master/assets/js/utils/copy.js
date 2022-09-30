export async function copy(text){
 try {
   await navigator.clipboard.writeText(text);
  return true;
 } catch (error) {
  console.log(error)
 }
}