const footer = () => {
    const footerElement = document.createElement("footer");
    footerElement.innerHTML = `
      <p class="footer"> &copy; by Ailyn y Brigid</p>
      <p class="footer">Bootcamp de Laboratoria DEV015 3° proyecto</p>  
      `;
      //link git hub ,,linkedik se podria añadir
  
    return footerElement;
    
  };
  
  export default footer;