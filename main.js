function generatePDF() {
  const productName = document.getElementById('product-name').value;
  const projectName = document.getElementById('project-name').value;
  const intendedUsage = document.getElementById('intended-usage').value;
  const format = document.getElementById('format').value;
  const lens = document.getElementById('lens').value;
  const orientation = document.getElementById('orientation').value;
  const lighting = document.getElementById('lighting').value;
  const cameraAngles = document.getElementById('camera-angles').value;
  const cameraPerspective = document.getElementById('camera-perspective').value;
  const lightingAddons = document.getElementById('lighting-addons').value;

  const documentDefinition = {
    pageSize: {
      width: 500,
      height: 'auto'
    },
    content: [
      {
        text: 'PRODUCT PHOTOGRAPHY - CREATIVE BRIEF',
        style: 'header'
      },
      {
        text: 'Please see specifications for product photography below:',
        style: 'subheader',
        margin: [0, 10, 0, 30]
      },
      { text: 'Product Name: ' + productName },
      { text: 'Project Name: ' + projectName },
      { text: 'Intended Usage: ' + intendedUsage },
      { text: 'Format of Photos: ' + format },
      { text: 'Camera Lens: ' + lens },
      { text: 'Orientation: ' + orientation },
      { text: 'Lighting: ' + lighting },
      { text: 'Camera Angles: ' + cameraAngles },
      { text: 'Camera Perspective: ' + cameraPerspective },
      { text: 'Lighting Add-ons: ' + lightingAddons },
      {
        text: 'Built using Creative Brief Generator - An online tool to streamline product photography sessions which breaks down art direction into actionables that are exported as printable PDFs.',
        style: 'subheader2',
        margin: [0, 10, 0, 30]
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      subheader2: {
        fontSize: 7,
        margin: [0, 0, 0, 10]
      }
    }
  };

  pdfMake.createPdf(documentDefinition).open();
}

const generatePDFButton = document.getElementById('generate-pdf');
generatePDFButton.addEventListener('click', generatePDF);




document.addEventListener('DOMContentLoaded', (event) => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
        const button = item.querySelector('button');
        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach((accordionItem) => {
                accordionItem.classList.remove('active');
                accordionItem.querySelector('button').setAttribute('aria-expanded', 'false');
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
