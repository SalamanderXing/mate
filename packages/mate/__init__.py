from importlib.metadata import version
import sys
import json
from .mate import Mate as __Mate

version = version("mate")
__version__ = version

import select
import sys

mate = __Mate.load()

from beartype.claw import beartype_this_package

beartype_this_package()
