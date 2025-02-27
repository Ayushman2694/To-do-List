module.exports=getDate;

function getDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let date = today.toLocaleDateString("en-US", options);
  return date;
}
