form_send.onclick = (event) => {
    const addressLine1 = formAddressLine1.value
    const addressLine2 = formAddressLine2.value
    const date = formDate.value
    const author = formAuthor.value

    const pdf = new jspdf.jsPDF()
    pdf.addImage('static/img/рамка.png', 'PNG', 0, 0, 210, 300)
    pdf.text(addressLine1, 30, 50)
    pdf.text(addressLine2, 30, 60)
    pdf.text(author, 30, 260)
    pdf.text(date, 155, 260)
    pdf.save('congratulations.pdf')
}
