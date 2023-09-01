from importlib.metadata import version
from .mate import Mate as __Mate

version = version("mate")
__version__ = version


mate = __Mate.load()

from beartype.claw import beartype_this_package

beartype_this_package()
