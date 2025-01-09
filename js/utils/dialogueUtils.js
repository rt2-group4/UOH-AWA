let lastFocusedElement;

export function showCustomDialog(message, onConfirm, onCancel = null) {
    let modalElement = document.getElementById("confirmationModal");
    if (!modalElement) {
        injectModal();
        modalElement = document.getElementById("confirmationModal");
    }

    lastFocusedElement = document.activeElement;

    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = message;

    const confirmButton = document.getElementById("confirmButton");
    const cancelButton = document.getElementById("cancelButton");

    confirmButton.replaceWith(confirmButton.cloneNode(true));
    cancelButton.replaceWith(cancelButton.cloneNode(true));

    const newConfirmButton = document.getElementById("confirmButton");
    const newCancelButton = document.getElementById("cancelButton");

    newConfirmButton.onclick = () => {
        if (onConfirm) onConfirm();
        closeModal();
    };

    newCancelButton.onclick = () => {
        if (onCancel) onCancel();
        closeModal();
    };

    // Configure modal properties
    const modal = new bootstrap.Modal(modalElement, {
        backdrop: "static",
        keyboard: true,
    });
    modal.show();

    function closeModal() {
        modal.hide();
    }

    modalElement.addEventListener("hidden.bs.modal", () => {
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    });
}

function injectModal() {
    const modalHTML = `
        <div 
            class="modal fade" 
            id="confirmationModal" 
            tabindex="-1" 
            aria-labelledby="confirmationModalLabel" 
            aria-describedby="confirmationMessage" 
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmationModalLabel">⚠️ Confirmation Required</h5>
                        <button 
                            type="button" 
                            class="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        <p id="confirmationMessage">Are you sure you want to proceed?</p>
                    </div>
                    <div class="modal-footer">
                        <button 
                            type="button" 
                            class="btn btn-secondary" 
                            id="cancelButton" 
                            data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-primary" 
                            id="confirmButton">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
}
