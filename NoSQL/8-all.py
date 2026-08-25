#!/usr/bin/env python3
"""
This module contains a function that lists all documents.
"""


def list_all(mongo_collection):
    "listing all the documents in a collection."

    if mongo_collection is None:
        return []

    return list(mongo_collection.find())
