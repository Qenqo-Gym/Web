
//Function send whatsapp
export const sendWhatsapp = (whatsappNumber, whatsappMessage) => {
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, '_blank');
}