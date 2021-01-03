export module moo {
    export let search : (allElements: Array<any>, searchedElement: any) => number = function (elements, element) {
        let i, counter = 0;
        for (i = 0; i < elements.length; i++) {
            if (elements[i] == element) counter++;
        }
        return counter;
    }    
}
