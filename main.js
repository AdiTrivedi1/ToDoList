
// Adding item

function createInputEle() {
    var input_ele = document.createElement('input');
    input_ele.id = 'new_item';
    el.appendChild(input_ele);
    
    var input_item = document.getElementById('new_item');
    input_item.focus()

    var usage_hint = document.getElementById('usage');
    usage_hint.className = 'usage';
    input_item.addEventListener('blur', addNewItem, false);
}

var add_item = document.getElementById('add');
add_item.addEventListener('click', createInputEle, false);

function addNewItem(e) {
    var usage_hint, target, item_content, targetParent;
    usage_hint = document.getElementById('usage');
    usage_hint.className = 'do_not_show';
    target = e.target;
    item_content = target.value;
    
    targetParent = target.parentNode;
    targetParent.removeChild(target);
    // if todo is blank skip.
    if (item_content == '') {
        return false;
    }
    e.preventDefault();

    // add item to list
    var newListItem, delete_option, text;
    newListItem = document.createElement('li');

    // giving priority
    if (item_content.indexOf('*p1') > -1) {
        newListItem.className = 'hot';
    }else if (item_content.indexOf('*p2') > -1) {
        newListItem.className = 'cool';
    }

    text = item_content.split('*')

    delete_option = '<a href="#" class="delete"><img src="./images/delete.png" alt="delete item" title="Complete"></a>';
    newListItem.innerHTML = text[0] + delete_option;
    targetParent.appendChild(newListItem);
}


// removing item

function removeItem(e) {
    var eltarget, elParent, elGrandParent, elGGrandParent, elTagName;
    eltarget = e.target;
    elTagName = e.target.tagName;
    if (elTagName === 'IMG') {
        elParent = eltarget.parentNode;
        elGrandParent = elParent.parentNode;
        elGGrandParent = elGrandParent.parentNode;
        elGGrandParent.removeChild(elGrandParent);
        e.preventDefault();
        e.stopPropagation();
    }
}

var el = document.getElementById('toDoList');
el.addEventListener('click', function (e) {
    removeItem(e);
}, false);
