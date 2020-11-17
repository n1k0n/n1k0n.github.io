form_send.onclick = (event) => {
    const address_line1 = form_address_line1.value
    const address_line2 = form_address_line2.value
    const date = form_date.value
    const author = form_author.value

    const pdf = new jspdf.jsPDF()
    pdf.addImage('static/img/рамка.png', 'PNG', 0, 0, 210, 300)
    pdf.text(address_line1, 30, 50)
    pdf.text(address_line2, 30, 60)
    pdf.text(author, 30, 260)
    pdf.text(date, 155, 260)
    pdf.save('congratulations.pdf')
}
