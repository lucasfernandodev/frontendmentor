export default function custoSVGInObject(){
  const objectLogo = document.querySelector(".brand-icon");
  const objectDocument = objectLogo.contentDocument;
  const logoIcon = objectDocument.getElementById("logo");
  const path = logoIcon.querySelector("path");
  path.style.fill = "#fff";

  const socialMenuObject = document.querySelectorAll(
    ".social-menu li object"
  );

  socialMenuObject.forEach((element) => {
    const socialMenuDocument = element.contentDocument;
    const socialIcons = socialMenuDocument.getElementsByTagName("svg")[0];
    const socialIconsPath =
      socialMenuDocument.getElementsByTagName("path")[0];

    socialIcons.setAttribute("width", 32);
    socialIcons.setAttribute("height", 32);

    socialIconsPath.style.height = "100%";
    socialIconsPath.style.width = "100%"; 
    socialIcons.style.cursor = "pointer"
    socialIcons.onmouseover = () => {
      socialIconsPath.style.fill = 'hsl(136, 65%, 51%)';
    }
    socialIcons.onmouseleave = () => {
      socialIconsPath.style.fill = '#fff';
    }
  });
}