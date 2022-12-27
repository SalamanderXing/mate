import json
import os


class MateRuntime:
    def save(self, location: str):
        print(f"Saving {self.to_dict()} to {location}")
        with open(location, "w") as f:
            json.dump(self.to_dict(), f)

    def to_dict(self):
        return {
            key: value
            for key, value in self.__dict__.items()
            if not key.startswith("_")
        }

    def __init__(
        self,
        command: str,
        save_dir: str,
        checkpoint_path: str,
    ):
        self.command: str = command
        self.checkpoint_path: str = ""
        self.save_dir = save_dir
        self.checkpoint_path = os.path.join(checkpoint_path, "checkpoint.ckpt")
