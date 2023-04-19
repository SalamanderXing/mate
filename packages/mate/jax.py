from jaxtyping import jaxtyped as __jaxtyped, Int, Float, Bool, Array, UInt
from typeguard import typechecked as __typechecked
from jax import jit as __jit
from jax.random import KeyArray
from typing import Callable
import functools


def jit(func):
    @functools.wraps(func)
    def wrapped(*args, **kwargs):
        return __jit(__jaxtyped(__typechecked(func)))(*args, **kwargs)

    return wrapped


def typed(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return __jaxtyped(__typechecked(func))(*args, **kwargs)

    return wrapper


# defines an alias type called ScalarInt for Int[Array, ""]
SInt = Int[Array, ""]
SFloat = Float[Array, ""]
SBool = Bool[Array, ""]
SUInt = UInt[Array, ""]

Key = UInt[Array, "2"] | KeyArray
