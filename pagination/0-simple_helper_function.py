#!/usr/bin/env python3
"""
Module containing the helper function.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    "return the start and end indexes for pagination request"
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
