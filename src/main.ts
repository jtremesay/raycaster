import { Raycaster } from "./engine";


function main() {
    let update_rate = 15; // Updates per seconds

    let rc_node = document.getElementById("raycaster");
    let rc = new Raycaster(rc_node);
    rc.run();
}

main();