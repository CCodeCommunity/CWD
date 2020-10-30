const TR = new TemplateRenderer();
TR.RegisterTemplate("memory-cell", "#memory-cell-template");

const ByteToPaddedHex = number => ("0".repeat(2 - (number % 255).toString(16).length)) + (number % 255).toString(16);

function GenerateMemoryViewFromBytes(bytes) {
    TR.ClearTarget("#view-area");
    
    bytes.forEach(byte =>
        TR.Render({
            template: "memory-cell",
            target: "#view-area",
            variables: {
                number: ByteToPaddedHex(byte)
            }
        })
    );
}

GenerateMemoryViewFromBytes([
    1, 1, 2, 3, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 
    8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
    1, 1, 2, 3, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 
    8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
    1, 1, 2, 3, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 
    8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
    1, 1, 2, 3, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 
    8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
    1, 1, 2, 3, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 
    8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
    1, 1, 2, 3, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 
    8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
    1, 1, 2, 3, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 
    8, 13, 21, 34
]);