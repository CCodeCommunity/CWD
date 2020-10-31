const TR = new TemplateRenderer();

// memory view templates
TR.RegisterTemplate("memory-cell", "#memory-cell-template");
TR.RegisterTemplate("load-file", "#memory-view-load-template");

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

function loadFile() {
    console.log("load file")
}

function LoadViewMemoryView() {
    TR.ClearTarget("#view-area");

    TR.Render({
        template: "load-file",
        target: "#tools"
    });
}

LoadViewMemoryView();