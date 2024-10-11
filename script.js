function sendwhatsapp(){
    const name = document.getElementById('name').value;

    const whatsappMessage = `Name: ${name}`;
    const whatsappNumber = '+60193893074';
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, '_blank');
}