function newNodesErrors() {
    const MODULE_NAME = 'Nodes Errors'
    const logger = newWebDebugLog()
    logger.fileName = MODULE_NAME

    let thisObject = {
        onRecordChange: onRecordChange,
        initialize: initialize,
        finalize: finalize
    }
 
    return thisObject

    function finalize() {
 
    }

    function initialize(pRootNode) {
 
    }

    function onRecordChange(currentRecord) {
        if (currentRecord === undefined) { return }
        let array = currentRecord.errors
        if (array === undefined) { return }
        for (let i = 0; i < array.length; i++) {
            let arrayItem = array[i]
            let nodeId = arrayItem[0]
            let value = arrayItem[1]
            applyValue(nodeId, value)
        }
    }

    async function applyValue(nodeId, value) {
        if (UI.projects.superalgos.spaces.chartingSpace.visible !== true) { return }
        let node = await UI.projects.superalgos.spaces.designSpace.workspace.getNodeById(nodeId)
        if (node === undefined) { return }
        if (node.payload === undefined) { return }
        if (node.payload.uiObject === undefined) { return }
        if (value === '') {
            node.payload.uiObject.resetErrorMessage()
        } else {
            node.payload.uiObject.setErrorMessage(value, 3)
        }
    }
}
