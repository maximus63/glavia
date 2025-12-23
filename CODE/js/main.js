const shopNowBtn = document.getElementById("shopNowBtn");
const productsSection = document.getElementById("products");

shopNowBtn.addEventListener("click", () => {
  productsSection.scrollIntoView({
    behavior: "smooth"
  });
});
