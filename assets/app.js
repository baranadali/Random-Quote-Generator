    document.querySelector("#generate-button").addEventListener("click", generateQuote);

    let quotes = {
        "- Marie Ebner von Eschenbach" : '"Fear not those who argue but those who dodge."',
        "- Jacques Maritain" : '"Gratitude is the most exquisite form of courtesy."',
        "- Elbert Hubbard" : '"One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man."',
        "- Oscar Wilde" : '"Disobedience, in the eyes of anyone who has read history, is mans original virtue. It is through disobedience and rebellion that progress has been made."',
        "- Rita Mae Brown" : '"The statistics on sanity are that one out of every four Americans is suffering from some form of mental illness. Think of your three best friends. If they re okay, then its you."',
        "- William James" : '"The greatest discovery of my generation is that a human being can alter his life by altering his attitudes of mind."',
        "- George Carlin" : '"Im not concerned about all hell breaking loose, but that a PART of hell will break loose... itll be much harder to detect."',
        "- Dr. Seuss" : '"Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind."',
    }

    function generateQuote() {
        let authors = Object.keys(quotes);
        let author = authors[Math.floor(Math.random() * authors.length)];
        let quote = quotes[author];

        document.querySelector("#quote").textContent = quote;
        document.querySelector("#author").textContent = author;
    }