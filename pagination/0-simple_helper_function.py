#!/usr/bin/env python3
"""
Module containing a function that takes two integer arguments.
"""


def index_range(page, page_size):
    "return the start and end indexes for pagination request"
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
