
const input = document.getElementById('input')
const output = document.getElementById('output')

const commands = {
    help: 'Files accessable through cat: resume.txt ',
}


function print(text) {
    output.innerHTML += `<br> ${text}`;
}

async function fetchFile(fileName){    
    const response = await fetch(fileName)
    const text = await response.text();
    print(text.replace(/\n/g, '<br>'))
}

//if we want to make it 'safe' in case something isnt loading w enough time we can do:
// async function fetchFile(fileName) {
//     try {
//         const response = await fetch(fileName);
//         if (!response.ok) throw new Error('File not found');
//         const text = await response.text();
//         print(text.replace(/\n/g, '<br>'));
//     } catch (err) {
//         print('Error: ' + err.message);
//     }
// }


input.addEventListener('keydown', function (event)
{
    if(event.key === 'Enter')
    {
        const command = input.value.trim()
        print(' > ' + command)


    if(command === 'clear')
    {
        output.innerHTML='Monika Portfolio<br>'
    }
    else if(commands[command])
    {

        print(commands[command])
    }
    else if (command === 'cat resume.txt')
    {
        fetchFile('.\\files\\resume.txt');
    }
    else
    {
        print('Command not found')
    }

    input.value = ''
    
    //if the terminal overflows it is able to scroll
    // window.scrollTo(0, document.body.scrollHeight)
    }
});

