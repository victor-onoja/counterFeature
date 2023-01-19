let count: any;

if (sessionStorage.getItem('default')) {
    count = sessionStorage.getItem('default');
} else {
    count = 0;
}

const value = document.querySelector('#value') as HTMLElement;
const btns = document.querySelectorAll('.btn');
const change = document.getElementById('default') as HTMLInputElement;
const input = document.getElementById('input');

value.textContent = count;

btns.forEach(function(btn){
    btn.addEventListener('click', function (e){
        const target = e.currentTarget as HTMLElement; 
        const styles = target.classList[1];
        switch (styles) {
            case 'reduce':
                count--;
                value.style.color = 'red';
                break;
            case 'increase':
            count++;
                value.style.color = 'green';
                break;
            case 'reset':
            count = 0;
            sessionStorage
            .clear();
            default:
                if (sessionStorage.getItem('default')) {
                    count = sessionStorage.getItem('default');
                } else {
                    count = 0;
                }
                value.style.color = '#222';
                break;
        }
        value.textContent = count;
    })
});

input.addEventListener('submit', function(e){
if(!change.value){
        e.preventDefault();
        alert('change default');
    }else{
        sessionStorage.setItem('default', change.value);} 
});
export{};