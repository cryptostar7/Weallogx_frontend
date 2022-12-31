export const putPercentage = () => {
    // Percentage Inputs
    const percentInputs = document.querySelectorAll(".percent-input");
    percentInputs.forEach(function (percentInput) {
        percentInput.addEventListener("input", function (e) {
            let parentDiv = e.target.closest(".percent-input-div");
            let len = e.target.value.length;
            if (len > 3) {
                let actualValue = e.target.value.slice(0, len - 1);
                e.target.value = actualValue;
                // alert("Please enter valid percentage value.");
                return false;
            }
            if (len == 0) {
                e.target.value = "";
                if (parentDiv) {
                    parentDiv.classList.remove("hide-percent");
                }
            } else {
                e.target.value = `${e.target.value}%`;
                let valuewithPercent = `${e.target.value.split("%").join("")}%`;
                e.target.value = valuewithPercent;
                if (parentDiv) {
                    parentDiv.classList.add("hide-percent");
                }
            }
        });

        percentInput.addEventListener("keydown", function (e) {
            let parentDiv = e.target.closest(".percent-input-div");
            if (e.keyCode == 8) {
                let len = e.target.value.length;
                let valueAfterDelete = e.target.value.slice(0, len - 2);
                let valuewithPercent = `${valueAfterDelete}%`;
                e.target.value = valuewithPercent;
                if (len <= 2) {
                    e.target.value = "";
                    if (parentDiv) {
                        parentDiv.classList.remove("hide-percent");
                    }
                } else {
                    if (parentDiv) {
                        parentDiv.classList.add("hide-percent");
                    }
                }
            }
        });
    });
    return true;
}

export const putYears = () => {
    const yearInputs = document.querySelectorAll(".year-input");
    yearInputs.forEach(function (yearInput) {
        yearInput.addEventListener("focus", function (e) {
            let yearValue = e.target.value.replace("years", "").trim();
            let parentDiv = e.target.closest(".year-input-div");
            parentDiv.classList.remove("hide-year");
            e.target.value = yearValue;
            e.target.type = 'number';
        });

        yearInput.addEventListener("focusout", function (e) {
            e.target.type = 'text';
            let parentDiv = e.target.closest(".year-input-div");
            let yearValue = e.target.value.replace("years", "").trim();
            let len = e.target.value.trim().length;
            if (len == 0) {
                e.target.value = "";
                parentDiv.classList.remove("hide-year");
            } else {
                e.target.value = `${e.target.value} years`;
                parentDiv.classList.add("hide-year");
            }
        });
    });
}

export const getNumber = (_str) => {
    var arr = String(_str).split('');
    var out = new Array();
    for (var cnt = 0; cnt < arr.length; cnt++) {
        if (isNaN(arr[cnt]) == false || arr[cnt] == ".") {
            out.push(arr[cnt]);
        }
    }
    return Number(out.join(''));
}
