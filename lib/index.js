/* eslint-disable import/extensions */
import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import CharacterCountController from "./controllers/character_count_controller.js";
import CopyToClipboardController from "./controllers/copy_to_clipboard_controller.js";
import EventListenerController from "./controllers/event_listener_controller.js";
import CheckAllCheckboxesController from "./controllers/check_all_checkboxes_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
window.Stimulus.register("character-counter", CharacterCountController);
window.Stimulus.register("clipboard", CopyToClipboardController);
window.Stimulus.register("event-listener", EventListenerController);
window.Stimulus.register("checklist", CheckAllCheckboxesController);
