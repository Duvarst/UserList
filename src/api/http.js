export async function request(url) {
  try {
    let response = await fetch(url);
    let dataParse = await response.json();
    let data = dataParse.data;
    return data;
  } catch (er) {
    console.error(er);
  }
}
