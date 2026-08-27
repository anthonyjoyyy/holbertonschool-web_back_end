#!/usr/bin/env python3
"""
Provides stats about Nginx logs stored in MongoDB.
"""
from pymongo import MongoClient


def log_stats():
    """
    Prints stats about Nginx logs in MongoDB: total logs,
    method counts, and status check count.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    # Total logs
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # Methods count
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Status check count
    status_check = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
