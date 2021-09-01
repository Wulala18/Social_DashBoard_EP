const toggler = document.getElementById('toggler-circle');
const togglerbg = document.getElementById('toggler');

const body = document.body;

togglerbg.addEventListener('click', ()=>{
    if(body.classList.contains('dark'))
    {
        body.classList.replace('dark', 'light');
        toggler.style.transform = 'translate(20px)';
    }else
    {
        body.classList.replace('light', 'dark');
        toggler.style.transform = 'translate(0)';
    }
});


