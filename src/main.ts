import { Camera } from "./camera";
import { Drawer } from "./drawer";
import { render } from "./render";
import { Scene } from "./scene";
import { Vector2 } from "./vector2";
import { CanvasDrawer } from "./drawer_canvas";
import { DrawerMultiplexer } from "./drawer_multiplexer";
import { SVGDrawer } from "./drawer_svg";
import { Raycaster } from "./engine";


function main() {
    let update_rate = 15; // Updates per seconds

    let rc_node = document.getElementById("raycaster");
    let rc = new Raycaster(rc_node);
    rc.run();
}

main();