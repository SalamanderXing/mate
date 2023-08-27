from jaxtyping import jaxtyped as __jaxtyped, Int, Float, Bool, Array, UInt
from beartype import beartype as __typechecked
from jax import jit as __jit
from jax.random import KeyArray
from jaxtyping import PRNGKeyArray
import functools


# def jit(func):
#     @functools.wraps(func)
#     def wrapped(*args, **kwargs):
#         return __jit(__jaxtyped(__typechecked(func)))(*args, **kwargs)
#
#     return wrapped
#
#
# def typed(func):
#     @functools.wraps(func)
#     def wrapper(*args, **kwargs):
#         return __jaxtyped(__typechecked(func))(*args, **kwargs)
#
#     return wrapper


def typed(f):
    return __jaxtyped(__typechecked(f))


# defines an alias type called ScalarInt for Int[Array, ""]
SInt = Int[Array, ""] | int
SFloat = Float[Array, ""] | float
SBool = Bool[Array, ""] | bool
SUInt = UInt[Array, ""] | int
Key = PRNGKeyArray
