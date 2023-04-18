from importlib.metadata import version
from .mate import Mate as __Mate
from jaxtyping import jaxtyped as __jaxtyped
from typeguard import typechecked as __typechecked

version = version("mate")
__version__ = version
mate = __Mate.load()


def typed(func):
    return __jaxtyped(__typechecked(func))
