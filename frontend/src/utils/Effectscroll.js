export const effectScroll = (classScron) => {
    const handleScroll = () => {
        const imageContainer = document.querySelector(classScron);
        const scrollPosition = window.scrollY;
  
        if (imageContainer && scrollPosition > imageContainer.offsetTop - window.innerHeight / 2) {
          imageContainer.classList.add('visible');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
};
