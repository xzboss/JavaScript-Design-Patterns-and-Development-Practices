var miniConsole = (function () {
  const modal = null;
  const createModal = function () {
    const modal = document.createElement(div);
    modal.style.cssText =
      "width:100px;height:100px;position:absolute;right:0;top:0";
    document.body.appendChild(modal);
    modal = modal;
  };
  return {
    log: value => {
      if (!modal) createModal();
      modal.appendChild(value);
      modal.style.display = "none";
    },
  };
})();
