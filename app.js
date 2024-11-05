const sharebutton = document.querySelectorAll('.tile-share-button')
console.log(sharebutton)

async function copyText(e){
    //prevent button going to the side
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert ("Copied the text: " + link)
    } catch(err){
        console.error(err)
    }

}

sharebutton.forEach(sharebutton => sharebutton.addEventListener('click', copyText))