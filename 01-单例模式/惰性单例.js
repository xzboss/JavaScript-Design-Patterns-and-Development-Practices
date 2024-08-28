const CreateDiv = function () {
  const div = document.createElement("div");
  return document.body.appendChild(div);
};
const CreateIframe = function () {
  const div = document.createElement("iframe");
  return document.body.appendChild(div);
};
const getInstance = function (creator) {
  let _instance = null;
  return function () {
    return _instance || (_instance = creator.apply(this, arguments));
  };
};
const createLoginLayer = getInstance(CreateDiv);
document.getElementById("button").addEventListener("click", () => {
  const loginLayer = createLoginLayer();
  loginLayer.className = "show";
});